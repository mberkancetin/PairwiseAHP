import { useMemo } from 'react';
import { ComparisonGroup, ComparisonPair } from '../types';
import { surveyData } from '../data';
import { useLanguage } from './useLanguage';

const generatePairs = (items: string[]): ComparisonPair[] => {
  const pairs: ComparisonPair[] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      pairs.push({ item1: items[i], item2: items[j] });
    }
  }
  return pairs;
};

export const useSurveyData = () => {
  const { t } = useLanguage();

  const comparisonGroups = useMemo<ComparisonGroup[]>(() => {
    const groups: ComparisonGroup[] = [];
    
    // Groups for comparing sub-criteria within each main criterion
    surveyData.forEach((mainCriterion) => {
      const subCriteriaKeys = Object.keys(mainCriterion.subCriteria);
      groups.push({
        name: t('comparing_within', { criterion: t(mainCriterion.key) }),
        pairs: generatePairs(subCriteriaKeys),
      });
    });

    // Group for comparing main criteria
    const mainCriteriaKeys = surveyData.map(mc => mc.key);
    groups.push({
      name: t('comparing_main_criteria'),
      pairs: generatePairs(mainCriteriaKeys),
    });

    return groups;
  }, [t]);

  const getExplanationsForPair = (pair: ComparisonPair, groupIndex: number) => {
      const isMainCriteriaComparison = surveyData.some(mc => mc.key === pair.item1) && surveyData.some(mc => mc.key === pair.item2);

      let explanations1: string[] = [];
      let explanations2: string[] = [];
      
      if (isMainCriteriaComparison) {
          const mainCrit1 = surveyData.find(mc => mc.key === pair.item1);
          const mainCrit2 = surveyData.find(mc => mc.key === pair.item2);
          explanations1 = mainCrit1 ? Object.keys(mainCrit1.subCriteria).map(k => t(k)) : [];
          explanations2 = mainCrit2 ? Object.keys(mainCrit2.subCriteria).map(k => t(k)) : [];
      } else {
          const parentCriterion = surveyData[groupIndex];
          if (parentCriterion?.subCriteria) {
              explanations1 = parentCriterion.subCriteria[pair.item1] || [];
              explanations2 = parentCriterion.subCriteria[pair.item2] || [];
          }
      }
      return { explanations1, explanations2, isMain: isMainCriteriaComparison };
  };

  return { comparisonGroups, getExplanationsForPair };
};

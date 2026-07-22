import { useMemo, useState } from 'react';
import { SKILLS } from '../data/skills-data.js';

const CATEGORY_COLORS = ['var(--color-primary-dark)', 'var(--color-secondary)', 'var(--color-accent)'];

/**
 * useSkills 훅
 * 스킬 목록을 상태로 관리한다. 같은 카테고리끼리 묶이도록 정렬하고,
 * 카테고리 내에서는 숙련도 내림차순으로 정렬한다.
 * 카테고리별로 고정된 색상을 순환 배정해 카드 색상 구분에 사용한다.
 *
 * @returns {{ skills: object[], categoryOptions: string[], addSkill: function }}
 */
export function useSkills() {
  const [skills, setSkills] = useState(SKILLS);

  const addSkill = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  const categoryOptions = useMemo(
    () => [...new Set(skills.map((skill) => skill.category))],
    [skills],
  );

  const categoryColorMap = useMemo(() => {
    const map = new Map();
    categoryOptions.forEach((category, index) => {
      map.set(category, CATEGORY_COLORS[index % CATEGORY_COLORS.length]);
    });
    return map;
  }, [categoryOptions]);

  const sortedSkills = useMemo(
    () =>
      [...skills]
        .sort((a, b) => {
          const categoryDiff = categoryOptions.indexOf(a.category) - categoryOptions.indexOf(b.category);
          return categoryDiff !== 0 ? categoryDiff : b.level - a.level;
        })
        .map((skill) => ({ ...skill, color: categoryColorMap.get(skill.category) })),
    [skills, categoryOptions, categoryColorMap],
  );

  return { skills: sortedSkills, categoryOptions, addSkill };
}

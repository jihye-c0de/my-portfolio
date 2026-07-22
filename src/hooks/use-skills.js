import { useMemo } from 'react';
import { SKILLS } from '../data/skills-data.js';

const CATEGORY_COLORS = ['var(--color-primary-dark)', 'var(--color-secondary)', 'var(--color-accent)'];

/**
 * useSkills 훅
 * 스킬 목록을 카테고리별로 하나의 그룹으로 묶어 반환한다.
 * 각 그룹 안에서는 숙련도 내림차순으로 정렬한다.
 * 카테고리별로 고정된 색상을 순환 배정해 카드 색상 구분에 사용한다.
 *
 * @returns {{ groupedSkills: object[] }}
 */
export function useSkills() {
  const categoryOptions = useMemo(
    () => [...new Set(SKILLS.map((skill) => skill.category))],
    [],
  );

  const groupedSkills = useMemo(
    () =>
      categoryOptions.map((category, index) => ({
        category,
        color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
        items: SKILLS.filter((skill) => skill.category === category).sort((a, b) => b.level - a.level),
      })),
    [categoryOptions],
  );

  return { groupedSkills };
}

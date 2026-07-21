import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useProjects 훅
 *
 * Props:
 * @param {number} limit - 가져올 프로젝트 최대 개수 [Optional]
 *
 * Example usage:
 * const { projects, isLoading } = useProjects({ limit: 4 });
 */
export function useProjects({ limit } = {}) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      let query = supabase
        .from('portfolio_projects')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (limit) {
        query = query.limit(limit);
      }

      const { data } = await query;

      if (isMounted && data) {
        setProjects(data);
      }
      if (isMounted) {
        setIsLoading(false);
      }
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { projects, isLoading };
}

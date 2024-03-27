import useMediaQuery from '../useMediaQuery';

/**
 * Hook that returns the current breakpoint state and updates it based on media queries.
 * @example
 * // Usage in a functional component
 * function MyComponent() {
 *   const { active } = useBreakpoints();
 *   return (
 *     <div>
 *       {active === 'xs' && <p>Extra Small Screen</p>}
 *       {active === 'sm' && <p>Small Screen</p>}
 *       {active === 'md' && <p>Medium Screen</p>}
 *       {active === 'lg' && <p>Large Screen</p>}
 *     </div>
 *   );
 * }
 */
export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  return breakpoints;
}

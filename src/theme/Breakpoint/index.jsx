import useBreakpoints from '../../hooks/useBreakpoints';

/**
 * Component that renders children based on the active breakpoint.
 * @example
 * <Breakpoint at="md">
 *   <p>This will be shown on medium screens</p>
 * </Breakpoint>
 * @param {string | string[]} at - The breakpoint(s) at which children should be rendered. Valid values are 'xs', 'sm', 'md', 'lg'.
 * @param {ReactNode} children - The elements to be rendered based on the breakpoint.
 */
export default function Breakpoint({ at, children }) {
  if (!at) {
    console.error('<Breakpoint>: must specify a breakpoint for the `at` prop.');
  }

  const breakpoints = Array.isArray(at) ? at : [at];
  const { active } = useBreakpoints();

  return breakpoints.includes(active) ? children : null;
}

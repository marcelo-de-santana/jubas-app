import {useState} from 'react';

export function useCollapsible({
  initialState = false,
}: {initialState?: boolean} = {}) {
  const [isCollapsed, setIsCollapsed] = useState(initialState);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return {
    handleCollapsible,
    isCollapsed,
  };
}

import { useState, useCallback } from 'react';

function useUpdate() {
  const [_, forceUpdate] = useState({});

  return useCallback(() => forceUpdate({}), []);
}

export default useUpdate;

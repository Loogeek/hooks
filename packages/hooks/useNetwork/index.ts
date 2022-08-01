import { useEffect, useState } from 'react';
import { isObject } from '../utils';

export interface NetworkState {
  since?: Date;
  online?: boolean;
  rtt?: number;
  type?: string;
  downlink?: number;
  saveData?: boolean;
  downlinkMax?: number;
  effectiveType?: string;
}

enum NetworkEventType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CHANGE = 'change',
}

function getConnection() {
  const nav = window.navigator as any;
  if (!isObject(nav)) return null;

  return nav.connection || nav.mozConnection || nav.webkitConnection;
}

function getConnectionProperty(): NetworkState {
  const c = getConnection();
  if (!c) return {};

  return c;
}

function useNetwork() {
  const [network, setNetwork] = useState(() => ({
    since: undefined,
    online: navigator?.onLine,
    ...getConnectionProperty(),
  }));

  useEffect(() => {
    const onOffline = () => {
      setNetwork((prevState) => ({
        ...prevState,
        online: false,
        since: new Date(),
      }));
    };

    const onOnline = () => {
      setNetwork((prevState) => ({
        ...prevState,
        online: true,
        since: new Date(),
      }));
    };

    const onConnectionChange = () => {
      setNetwork((prevState) => ({
        ...prevState,
        ...getConnectionProperty(),
      }));
    };

    window.addEventListener(NetworkEventType.ONLINE, onOnline);
    window.addEventListener(NetworkEventType.OFFLINE, onOffline);

    const connection = getConnection();
    connection?.addEventListener(NetworkEventType.CHANGE, onConnectionChange);

    return () => {
      window.removeEventListener(NetworkEventType.ONLINE, onOnline);
      window.removeEventListener(NetworkEventType.OFFLINE, onOffline);
      connection?.removeEventListener(NetworkEventType.CHANGE, onConnectionChange);
    };
  }, []);

  return network;
}

export default useNetwork;

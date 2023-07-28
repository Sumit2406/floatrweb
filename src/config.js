
import dev from './config_dev';
import prod from './config_prod';

const environment = 'DEV';




function envSwitcher() {
  switch (environment) {
    case 'DEV':
      return dev;
    case 'PROD':
      return prod;

      default : return true
  }
}

const config = envSwitcher();

export const { SERVERURL } = config;
import Hairdresser from '../../../../src/Hairdresser';

export default app => {
  app.factory('hairdresser', () => {
    const hairdresser = Hairdresser.create();
    hairdresser.override().title('Hairdresser Example');
    return hairdresser;
  });
};

import Ee from 'event-emitter';

export const emitter = new Ee();

export const notify = (emitterReference = 'mainNotification', msg, options) => {
  emitter.emit(emitterReference, msg, options);
};

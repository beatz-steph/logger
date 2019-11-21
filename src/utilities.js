export const collectedWorkerDetails = doc => {
  return { id: doc.id, ...doc.data() };
};

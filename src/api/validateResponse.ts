export function validateResponse(error: any) {
  if (error.response.status !== 200) {
    throw new Error(error.response.data.Error);
  } else {
    throw new Error("Произошла неизвестная ошибка.");
  }
}

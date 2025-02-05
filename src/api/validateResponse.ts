export function validateResponse(error: any) {
  if (error.response.status !== 200) {
    console.log("fg");
    throw new Error(error.response.data.error);
  } else {
    throw new Error("Произошла неизвестная ошибка.");
  }
}

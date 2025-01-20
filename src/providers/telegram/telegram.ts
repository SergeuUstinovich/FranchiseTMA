declare global {
  interface Window {
    Telegram: any;
  }
}

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  // const userName = tg?.initDataUnsafe?.user?.username;
  // const tg_id = tg?.initDataUnsafe?.user?.id;
  // const firstName = tg?.initDataUnsafe?.user?.first_name;
  // const lastName = tg?.initDataUnsafe?.user?.last_name;
  // const hash = tg?.initData
  const photo = tg?.initDataUnsafe?.user?.photo_url;
  const hash = ''
  const tg_id = "12323123";
  const userName = "byngra";
  const firstName = "Сергей";
  const lastName = 'Устинович';

  return { tg, userName, tg_id, photo, firstName, lastName, hash };
};

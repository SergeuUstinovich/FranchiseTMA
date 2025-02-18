declare global {
  interface Window {
    Telegram: any;
  }
}

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;
  // const hash = tg?.initData
  const hash =
    "query_id=AAHjSzUzAAAAAONLNTPLKaGH&user=%7B%22id%22%3A859130851%2C%22first_name%22%3A%22%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%22%2C%22last_name%22%3A%22%D0%A3%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%22%2C%22username%22%3A%22Byngara%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FfjrRUs_ABTBup9B8Kfts9GODc2UDL7zZeVpXm8xojzQ.svg%22%7D&auth_date=1739537922&signature=Jx92RioVa3RGbJTV3kwiYXGglSzvDahtb5bs_VMhFnYso35Ci5JMj1YDGygmK92HrisUHLkuWfobrhxo93LbDw&hash=245b85e5aec39927ed269304a49661c2f4d922286e78e7fa382094292244131e";

  // const hash =
  //   "query_id=AAGM-nQLAwAAAIz6dAtIiFCv&user=%7B%22id%22%3A6634666636%2C%22first_name%22%3A%22Aleksandr%22%2C%22last_name%22%3A%22Melnikov%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FwVrAMnUpOFqg-vreGsPc-wxo714aZDpQLuC2tACzXZXaSxoPBvCLKxoUmyoU1MLD.svg%22%7D&auth_date=1739800226&signature=MgqXtXzC6DSJQBT-xFaNXdyQIE1OIIvMMu9o9NWTL0yzQu8tqQxzrgmf5_3YAbiHtmiZ893BSm7svmbt8dMODw&hash=d95ecf3055105187644c58733e331df2f8c6172b27805d6330a69cac8e2c958c";

  return { tg, hash };
};

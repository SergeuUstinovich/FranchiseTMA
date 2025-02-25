import { lazy, Suspense } from "react";
import "./styles/global/App.scss";
import { Route, Routes } from "react-router-dom";
import { LoaderPage } from "./ui/Loader/LoaderPage";
import { isMobile } from "react-device-detect";
import { useTelegram } from "./providers/telegram/telegram";
import InitMobileErr from "./components/InitMobileErr/InitMobileErr";


const Layout = lazy(() => import("./pages/Layout/Layout"));
const TestGame = lazy(() => import("./pages/TestGame/TestGame"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const EditingProfile = lazy(
  () => import("./pages/EditingProfile/EditingProfile")
);
const Features = lazy(() => import("./pages/Features/Features"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const InviteFriend = lazy(() => import("./pages/InviteFriend/InviteFriend"));
const InfoPageCatalog = lazy(
  () => import("./pages/InfoPageCatalog/InfoPageCatalog")
);
const Education = lazy(() => import("./pages/Education/Education"));
const QrCodeUser = lazy(() => import("./pages/QrCodeUser/QrCodeUser"));
const PhotoListItem = lazy(
  () => import("./components/PhotoListItem/PhotoListItem")
);
const Tasks = lazy(() => import("./pages/Tasks/Tasks"));
const NotPage = lazy(() => import("./components/NotPage/NotPage"));
const PhotoIndex = lazy(() => import("./components/PhotoListItem/PhotoIndex"));

function App() {
  const { hash } = useTelegram();
  return (
    <>
      {hash ? (
        <Suspense fallback={<LoaderPage />}>
          <Routes>
            <Route
              path={"/"}
              element={isMobile ? <Layout /> : <InitMobileErr />}
            >
              <Route index element={<Catalog />} />
              <Route path={"game"} element={<TestGame />} />
              <Route path={"education"} element={<Education />} />
              <Route path={"tasks"} element={<Tasks />} />
              <Route path={"profile"} element={<Profile />} />
              <Route path={"profile-edit"} element={<EditingProfile />} />
              <Route path={"profile-featured"} element={<Features />} />
              <Route path={"profile-achievements"} element={<Achievements />} />
              <Route path={"profile-friends"} element={<InviteFriend />} />
              <Route path={"profile-edit-qr"} element={<QrCodeUser />} />
              <Route path={"catalog/:id"} element={<InfoPageCatalog />} />
              <Route path={"catalog/:id/photo"} element={<PhotoListItem />} />
              <Route path={"catalog/:id/photo/:index"} element={<PhotoIndex />} />
              <Route path={"*"} element={<NotPage />} />
            </Route>
          </Routes>
        </Suspense>
      ) : (
        <InitMobileErr />
      )}
    </>
  );
}

export default App;

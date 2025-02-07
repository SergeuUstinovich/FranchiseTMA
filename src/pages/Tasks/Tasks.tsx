import { useSelector } from "react-redux";
import { getAllTasks } from "../../providers/StoreProvider/selectors/getAllTasks";
import { ListTasks } from "../../components";
import { LoaderContent } from "../../ui/Loader/LoaderContent";

function Tasks() {
  const arrTasks = useSelector(getAllTasks);

  return <>{arrTasks ? <ListTasks arr={arrTasks} /> : <LoaderContent />}</>;
}

export default Tasks;

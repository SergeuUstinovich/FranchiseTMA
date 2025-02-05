import { useSelector } from "react-redux";
import { getAllTasks } from "../../providers/StoreProvider/selectors/getAllTasks";
import { ListTasks } from "../../components";

function Tasks() {
  const arrTasks = useSelector(getAllTasks);

  return <>{arrTasks && <ListTasks arr={arrTasks} />}</>;
}

export default Tasks;

import { useRouter } from 'next/router';
import CreateEditIpLabel from '../form/createEditIpLabel';
import Card from '../ui/card';
import IpLabelLogs from '../ui/ipLabelLogs';

const EditTemplate = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <Card>
        <CreateEditIpLabel mode="edit" id={id} />
        <IpLabelLogs id={id} />
      </Card>
    </div>
  );
};

export default EditTemplate;

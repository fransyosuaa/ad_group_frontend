import CreateEditIpLabel from '../form/createEditIpLabel';
import Card from '../ui/card';

const CreateTemplate = () => {
  return (
    <div className="container">
      <Card>
        <CreateEditIpLabel mode="create" />
      </Card>
    </div>
  );
};

export default CreateTemplate;

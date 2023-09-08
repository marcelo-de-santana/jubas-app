import {ModalForm, ModalScreen} from '@components';
import {useModalContext} from '@contexts';

export function UpdateForm() {
  const {isVisible, handleVisibility} = useModalContext();
  
  return (
    <>
      <ModalScreen
        visible={isVisible}
        handleVisibility={handleVisibility}>
          {/* <ModalForm 
          formData={}
          inputOptions={[{label:'name'}]}
          /> */}
        </ModalScreen>
    </>
  );
}

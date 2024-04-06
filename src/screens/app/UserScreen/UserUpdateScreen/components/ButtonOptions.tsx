import {
  ButtonOptionItem,
  ButtonOptions as ButtonOptionsComponent,
} from '@components';
import {useCollapsible} from '@hooks';
import {mask} from '@utils';

type ButtonOptionsProps = {
  userPermission?: string;
  handleChangeText: (key: string, value: string | number) => void;
};

export function ButtonOptions({
  userPermission,
  handleChangeText,
}: ButtonOptionsProps) {
  const permissions = ['ADMIN', 'BARBEIRO', 'CLIENTE'];

  const {isCollapsed, handleCollapsible} = useCollapsible({initialState: true});

  const changeOption = (permission: string) => {
    handleChangeText('permission', permission);
    handleCollapsible();
  };

  return (
    <ButtonOptionsComponent
      isCollapsed={isCollapsed}
      onPress={handleCollapsible}
      title={
        mask.capitalizeFirstLetter(userPermission) ?? 'Selecione uma opção'
      }>
      {permissions.map(permission => {
        const isSelected = permission === userPermission;

        return (
          <ButtonOptionItem
            key={permission}
            isSelected={isSelected}
            title={mask.capitalizeFirstLetter(permission)}
            onPress={() => changeOption(permission)}
          />
        );
      })}
    </ButtonOptionsComponent>
  );
}

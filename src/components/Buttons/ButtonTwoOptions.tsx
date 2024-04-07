import {Box} from '../Box';
import {ButtonProps} from './Button';
import {ButtonDangerOutline} from './ButtonDangerOutline';
import {ButtonSuccess} from './ButtonSuccess';

export type ButtonTwoOptions = {
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

export function ButtonTwoOptions({
  cancelButtonProps,
  confirmButtonProps,
}: Readonly<ButtonTwoOptions>) {
  return (
    <Box flexDirection="row" marginTop="s32">
      <ButtonDangerOutline flex={1} mr="s10" title="Voltar" {...cancelButtonProps} />
      <ButtonSuccess flex={1} ml="s10" title="Salvar" {...confirmButtonProps} />
    </Box>
  );
}

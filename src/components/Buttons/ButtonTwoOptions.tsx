import {Box} from '../Box';
import {ButtonProps} from './Button';
import {ButtonDangerOutline} from './ButtonDangerOutline';
import {ButtonSuccess} from './ButtonSuccess';

type ButtonTwoOptions = {
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

export function ButtonTwoOptions({
  cancelButtonProps,
  confirmButtonProps,
}: Readonly<ButtonTwoOptions>) {
  return (
    <Box flexDirection="row" marginTop="s32">
      <ButtonDangerOutline mr="s10" title="Voltar" {...cancelButtonProps} />
      <ButtonSuccess ml="s10" title="Salvar" {...confirmButtonProps} />
    </Box>
  );
}

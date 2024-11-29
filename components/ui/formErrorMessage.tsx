export const FormErrorMessage = ({
  message,
}: {
  message: string | undefined;
}) => {
  return <p className="text-destructive text-sm">{message}</p>;
};

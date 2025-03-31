import { FormProvider as Provider, UseFormReturn } from "react-hook-form";

interface FormProviderProps {
  children: React.ReactNode;
  methods: UseFormReturn<Record<string, any>>;
}

export default function FormProvider(props: FormProviderProps): React.ReactNode {
  const { children, methods } = props;

  return <Provider {...methods}>{children}</Provider>;
}

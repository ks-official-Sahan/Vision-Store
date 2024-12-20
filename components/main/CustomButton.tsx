import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  title: string;
  handlePress?: () => void;
  className?: string | undefined;
  textStyle?: string;
  isLoading?: boolean;
  variant?:
    | "ghost"
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | undefined;
}

const CustomButton = ({
  title,
  handlePress,
  className,
  textStyle,
  isLoading,
  variant = "ghost",
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      onPress={handlePress}
      disabled={isLoading}
      className={`rounded-xl min-h-12 flex-center px-2 py-1 ${className} ${
        isLoading && "opacity-50"
      }`}
    >
      <span
        className={`font-robert-medium ${
          textStyle ? textStyle : "text-lg text-black/75 dark:text-white"
        }`}
      >
        {title}
      </span>
    </Button>
  );
};

export default CustomButton;

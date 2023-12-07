import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import "./formmini.scss";

interface FormMiniProps {
  setActiveConfirmModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormMini: React.FC<FormMiniProps> = ({
  setActiveConfirmModal,
}) => {
  interface IFormInput {
    name: string;
    phone: number;
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = () => {
    if (setActiveConfirmModal) setActiveConfirmModal(true);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-mini">
        <div className="form-mini__title">
          <h6>Оставьте заявку</h6>
        </div>
        <div className="form-mini__desc">
          <p>и мы свяжемся с вами</p>
        </div>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^([а-яё]+|[a-z]+)$/i,
          })}
          placeholder="Имя"
          className="input"
          type="text"
        />
        {errors?.name?.type === "required" && (
          <span className="error">Заполните поле</span>
        )}
        {errors?.name?.type === "pattern" && (
          <span className="error">Укажите, пожалуйста, имя</span>
        )}
        <input
          {...register("phone", {
            required: true,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          })}
          placeholder="Телефон"
          className="input"
          type="text"
        />
        {errors?.phone?.type === "required" && (
          <span className="error">Заполните поле</span>
        )}
        {errors?.phone?.type === "pattern" && (
          <span className="error">Укажите, пожалуйста,номер телефона</span>
        )}
        <Button textColor="white" borderColor="white">
          Связаться
        </Button>
      </form>
    </>
  );
};

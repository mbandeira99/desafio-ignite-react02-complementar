import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { IFood } from '../../interfaces/IFood';
import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: IFood) => void;
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  function handleSubmit(data: IFood) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={createRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

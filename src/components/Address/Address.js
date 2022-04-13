import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Box } from "reflexbox";
import { Card } from "../../common-components/Card/Card";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";
import { Colors, FontSizes, FontWeights } from "../../shared/DesignTokens";
import { Button } from "../../common-components/Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Thing = styled.div`
  color: ${Colors.GRAY_FONT};
  font-size: ${FontSizes.ONE_HALF};
  margin-top: 16px;

  .something {
    display: block;
    margin: 0 0 0 10px;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.8em",
}))`
  font-size: 1em;
  border: 1px solid ${Colors.GRAY_200};
  border-radius: 4px;
  margin: 3px;
  padding: ${(props) => props.size};
  width: 326px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0 26px 20px;
`;

const Add = styled.span`
  color: ${Colors.GREEN_500};
  font-size: ${FontSizes.TWO};
  font-weight: ${FontWeights.SEMI_BOLD};
  margin: 16px 0 17px 0;
`;

const SaveButton = styled(Button)`
  margin-top: 12px;
  width: 220px;
`;

toast.configure();

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('uf').value=(conteudo.uf);
      document.getElementById('ibge').value=(conteudo.ibge);
  } //end if.
  else {
      //CEP não Encontrado.
      limpa_formulário_cep();
      alert("CEP não encontrado.");
  }
}

export function Address() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const validatedCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setFocus("addressNumber");
      });
    if (cep !== "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        document.getElementById("rua").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("uf").value = "";
        document.getElementById("ibge").value = "";

        var script = document.createElement("script");

        script.src =
          "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

        document.body.appendChild(script);
        toast.info("CEP válido.");
      }
      else {
        toast.error("Formato de CEP inválido.");
      }
    } 
  };

  return (
    <>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Thing>
            <label htmlFor="foo-button" className="something">
              CEP
            </label>
            <Input
              className="teste"
              placeholder="Ex: 0900099"
              {...register("cep")}
              maxLength={8}
              onBlur={validatedCep}
            />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Estado
            </label>
            <Input placeholder="Ex: SP" {...register("state")} />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Cidade
            </label>
            <Input placeholder="Ex: São Paulo" {...register("city")} />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Bairro
            </label>
            <Input placeholder="Ex: Centro" {...register("district")} />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Rua
            </label>
            <Input placeholder="Ex: Alameda Jundiaí" {...register("address")} />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Número
            </label>
            <Input placeholder="Ex: 1100" {...register("addressNumber")} />
          </Thing>
          <Add>Eu não sei meu endereço</Add>
          <SaveButton>Salvar</SaveButton>
        </Form>
        <Box width="100%">
          <ButtonLink to={`/detalhes/`}>Editar</ButtonLink>
        </Box>
      </Card>
    </>
  );
}

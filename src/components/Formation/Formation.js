import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Card } from '../../common-components/Card/Card';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {
	Colors,
	FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';
import { Subtitle } from '../../common-components/Subtitle/Subtitle';
import { Heading } from '../../common-components/Heading/Heading';

const Input = styled.input.attrs(props => ({
	type: "text",
	size: props.size || "0.8em",
  }))`
	font-size: 1em;
	border: 1px solid ${Colors.GRAY_200};
    box-sizing: border-box;
	border-radius: 4px;
	margin: 3px;
	padding: ${props => props.size};
    width: 326px;
  `;

const Container = styled.div`
	width: 100%;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	margin: 16px 0 26px 20px;	
`;

const Thing = styled.div`
  color: ${Colors.GRAY_FONT};
  font-size: ${FontSizes.ONE_HALF};
  margin-top: 16px;

  .something {
    display: block;
	margin: 0 0 0 10px;
  }
`

const Add = styled.span`
    color: ${Colors.GREEN_500};
    font-size: ${FontSizes.TWO};   
    font-weight: ${FontWeights.SEMI_BOLD};
    margin: 16px 0 17px 20px;
`;

export function Formation() {
	return (
		<>
			<Container>
				<Heading>&lsaquo; Formação</Heading>
			</Container>
			<Card>
                <Form>
				    <Subtitle>FORMAÇÃO 1</Subtitle>
                    <Form>
						<Thing>
    						<label htmlFor="foo-button" className="something">Graduação</label>
    						<Input placeholder="Geografia" />
  						</Thing>
                        <Thing>
    						<label htmlFor="foo-button" className="something">Ano</label>
    						<Input placeholder="1995" />
  						</Thing>
					</Form>
                    <Form>
                        <Subtitle>FORMAÇÃO 2</Subtitle>
						<Thing>
    						<label htmlFor="foo-button" className="something">Mestrado</label>
    						<Input placeholder="Educação" />
  						</Thing>
						<Thing>
    						<label htmlFor="foo-button" className="something">Ano</label>
    						<Input placeholder="2003" />
  						</Thing>
                    </Form>
                    <Form>
                        <Subtitle>FORMAÇÃO 3</Subtitle>
						<Thing>
    						<label htmlFor="foo-button" className="something">Doutorado</label>
    						<Input placeholder="Educação" />
  						</Thing>
						<Thing>
    						<label htmlFor="foo-button" className="something">Ano</label>
    						<Input placeholder="2010" />
  						</Thing>
                    </Form>
                        <Add>Adicionar formação</Add>
                    <Box width="100%">
                            <ButtonLink to={`/detalhes`}>Editar</ButtonLink>
                    </Box>
                </Form>
			</Card>
		</>
	);
}
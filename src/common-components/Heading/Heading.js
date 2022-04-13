import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';

export const Heading = styled.h1`
	color: ${(props) => props.color};
	cursor: pointer;
	font-family: ${FontFamilies.PRIMARY};
	font-size: ${FontSizes.THREE};
	font-weight: ${FontWeights.MEDIUM};
	line-height: ${FontLineHeights.MEDIUM};
	margin: 15px 0 20px 42px;
	padding: 0;
`;

Heading.defaultProps = {
	color: Colors.NEUTRAL_BLUE,
};
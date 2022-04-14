import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';

export const Subtitle = styled.h3`
    color: ${(props) => props.color};
	cursor: pointer;
	font-family: ${FontFamilies.PRIMARY};
	font-size: ${FontSizes.TWO};
	font-weight: ${FontWeights.SUPER_BOLD};
	line-height: ${FontLineHeights.HARD};
	margin: 16px 0 5px 0;
	padding: 0;
`;

Subtitle.defaultProps = {
	color: Colors.GREEN_500,
};
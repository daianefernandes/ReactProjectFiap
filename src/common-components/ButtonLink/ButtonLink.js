import styled from 'styled-components';
import {
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
	FontSizes,
} from '../../shared/DesignTokens';

export const ButtonLink = styled.a`
	align-items: center;
	background: none;
	border: none;
	color: ${Colors.GREEN_500};
	cursor: pointer;
	display: inline-flex;
	font-family: ${FontFamilies.PRIMARY};
	font-size: ${FontSizes.TWO};
	font-weight: ${FontWeights.SEMI_BOLD};
	height: 28px;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	justify-content: center;
	margin-top: 17px;
	// padding: ${Spaces.ONE} ${Spaces.TWO};
	text-decoration: none;
	width: 100%;
	&amp;:hover {
		color: ${Colors.GREEN_500};
	}
`;
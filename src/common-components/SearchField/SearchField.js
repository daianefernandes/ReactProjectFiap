import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLetterSpacings,
	FontSizes,
    FontWeights,
	Spaces,
} from '../../shared/DesignTokens';
import searchIcon from '../../assets/icons/icon-search.png';

const Wrapper = styled.div`
	align-items: center;
	background-color: ${Colors.NEUTRAL_GRAY};
	border-radius: 24px;
	display: flex;
	gap: ${Spaces.TWO};
	height: 40px;
	margin: 12px 16px 20px 15px;  
	padding: ${Spaces.NONE} ${Spaces.TWO};
`;

const Icon = styled.img.attrs({
	src: searchIcon,
})`
	height: 16px;
	width: 16px;
`;

const Input = styled.input`
	background-color: ${Colors.NEUTRAL_GRAY};
	border: none;
	color: ${Colors.GRAY_400};
	font-family: ${FontFamilies.PRIMARY};
	font-size: ${FontSizes.TWO};
    font-weight: ${FontWeights.REGULAR};
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	outline: none;
	padding: ${Spaces.ONE};
	&amp;::placeholder {
		color: ${Colors.GRAY_400};
		opacity: 1;
	}
	&amp;:-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
	&amp;::-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
`;

export function SearchField(props) {
	return (
		<>
			<Wrapper>
				<Input {...props} type="text" />
				<Icon />
			</Wrapper>
		</>
	);
};
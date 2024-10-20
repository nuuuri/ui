import styled from '@emotion/styled';

import Button from '@components/Button';

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export default function ButtonPage() {
  return (
    <div>
      <h3>default</h3>
      <Box>
        <Button color="default" variant="solid">
          solid
        </Button>
        <Button color="default" variant="outlined">
          outlined
        </Button>
        <Button color="default" variant="dashed">
          dashed
        </Button>
        <Button color="default" variant="filled">
          filled
        </Button>
      </Box>
      <h3>primary</h3>
      <Box>
        <Button color="primary" variant="solid">
          solid
        </Button>
        <Button color="primary" variant="outlined">
          outlined
        </Button>
        <Button color="primary" variant="dashed">
          dashed
        </Button>
        <Button color="primary" variant="filled">
          filled
        </Button>
      </Box>
      <h3>danger</h3>
      <Box>
        <Button color="danger" variant="solid">
          solid
        </Button>
        <Button color="danger" variant="outlined">
          outlined
        </Button>
        <Button color="danger" variant="dashed">
          dashed
        </Button>
        <Button color="danger" variant="filled">
          filled
        </Button>
      </Box>
    </div>
  );
}

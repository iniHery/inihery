import {
  Button,
  ButtonIconPosition,
  ButtonSize,
  ButtonType,
  IconButton,
  IconButtonSize,
} from "ds/Buttons";
import { Text, Number, Checkbox, Select } from "ds/Input";
import { Information, Settings } from "ds/Icons";
import {
  Body,
  BodyAs,
  BodySize,
  Heading,
  HeadingAs,
  HeadingSize,
  Caption,
  CaptionAs,
  CaptionSize,
} from "ds/Typography";
import Tooltip from "ds/Tooltip";
import Table from "ds/Table";

const Playground = () => {
  return (
    <div className="p-ds-10x">
      <Heading
        as={HeadingAs.h1}
        size={HeadingSize.xl}
        className="mb-ds-5x underline"
      >
        Design System
      </Heading>

      <div className="grid grid-cols-1 gap-ds-8x">
        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Heading
          </Heading>
          <div>
            <Heading as={HeadingAs.h1} size={HeadingSize.xl}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as={HeadingAs.h2} size={HeadingSize.l}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as={HeadingAs.h3} size={HeadingSize.m}>
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as={HeadingAs.h4} size={HeadingSize.s}>
              The quick brown fox jumps over the lazy dog
            </Heading>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Body
          </Heading>
          <div>
            <Body as={BodyAs.div} size={BodySize.l}>
              The quick brown fox jumps over the lazy dog
            </Body>
            <Body as={BodyAs.p} size={BodySize.m}>
              The quick brown fox jumps over the lazy dog
            </Body>
            <Body as={BodyAs.span} size={BodySize.s}>
              The quick brown fox jumps over the lazy dog
            </Body>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Caption
          </Heading>
          <div>
            <Caption as={CaptionAs.div} size={CaptionSize.s}>
              The quick brown fox jumps over the lazy dog
            </Caption>
            <Caption as={CaptionAs.p} size={CaptionSize.xs}>
              The quick brown fox jumps over the lazy dog
            </Caption>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Button
          </Heading>
          <div className="grid grid-cols-1 gap-ds-2x">
            <Button type={ButtonType.button} size={ButtonSize.m}>
              Button M
            </Button>
            <Button type={ButtonType.button} size={ButtonSize.s}>
              Button S
            </Button>
            <Button type={ButtonType.button} size={ButtonSize.xs}>
              Button XS
            </Button>
            <Button disabled type={ButtonType.button} size={ButtonSize.xs}>
              Disabled
            </Button>
            <Button icon={<Information />}>With Icon</Button>
            <Button
              icon={<Information />}
              iconPosition={ButtonIconPosition.right}
            >
              With Icon
            </Button>
            <div className="max-w-[320px]">
              <Button block type={ButtonType.button} size={ButtonSize.m}>
                Block
              </Button>
            </div>
            <div className="max-w-[320px]">
              <Button
                loading
                block
                type={ButtonType.button}
                size={ButtonSize.m}
              >
                Submitting...
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Icon Button
          </Heading>
          <div className="grid grid-cols-1 gap-ds-2x">
            <IconButton>
              <Settings />
            </IconButton>
            <IconButton size={IconButtonSize.s}>
              <Settings />
            </IconButton>
            <IconButton disabled>
              <Settings />
            </IconButton>
            <IconButton disabled size={IconButtonSize.s}>
              <Settings />
            </IconButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Select
          </Heading>
          <Select
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Text Field
          </Heading>
          <Text placeholder="Default" />
          <Text error placeholder="Error" />
          <Text block placeholder="Block Input" />
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Number Field
          </Heading>
          <Number value={1000000} placeholder="Default" />
          <Number value={1000000} error placeholder="Error" />
          <Number value={1000000} block placeholder="Block Input" />
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Checkbox
          </Heading>
          <Checkbox label="Default" />
          <Checkbox checked label="Checked" />
          <Checkbox disabled checked label="Disabled" />
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Tooltip
          </Heading>

          <Tooltip content="Super important info #1">
            <IconButton size={IconButtonSize.s}>
              <Information />
            </IconButton>
          </Tooltip>
          <Tooltip content="Super important info #2">
            <Information />
          </Tooltip>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Table
          </Heading>

          <Table>
            <Table.Head>
              <Table.Row header>
                <Table.Cell>Title 1</Table.Cell>
                <Table.Cell>Title 2</Table.Cell>
                <Table.Cell>Title 3</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {[...Array(10)].map((_, i) => (
                <Table.Row key={i}>
                  <Table.Cell>Content {i + 1}.1</Table.Cell>
                  <Table.Cell>Content {i + 1}.2</Table.Cell>
                  <Table.Cell>Content {i + 1}.3</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>

        <div className="grid grid-cols-1 gap-ds-1x">
          <Heading
            as={HeadingAs.h2}
            size={HeadingSize.s}
            className="text-ds-brand-01"
          >
            Size Comparison
          </Heading>
          <div className="flex">
            <Button className="mr-2">Default Button</Button>
            <Text placeholder="Text input" className="mr-2" />
            <IconButton className="mr-2">
              <Settings />
            </IconButton>
            <Checkbox checked label="Disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;

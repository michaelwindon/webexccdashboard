/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ContactCenterUI(props) {
  const { contactcentermodel, overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="column"
      width="751px"
      height="606px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="30px 20px 30px 20px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "ContactCenterUI")}
      {...rest}
    >
      <Flex
        gap="135px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="9px 0px 9px 0px"
        {...getOverrideProps(overrides, "headerbar")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "titlesection")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="32px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={contactcentermodel?.ccname}
            {...getOverrideProps(overrides, "Single Billing Office")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="32px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={contactcentermodel?.mainnumber}
            {...getOverrideProps(overrides, "713-366-5600")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "statesection")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="32px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Current State"
            {...getOverrideProps(overrides, "Current State")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="32px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Open"
            {...getOverrideProps(overrides, "Open")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "border3869763")}
      >
        <Divider
          width="706px"
          height="3px"
          shrink="0"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3869742")}
        ></Divider>
      </Flex>
      <Flex
        gap="5px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(188,236,245,1)"
        padding="13px 0px 13px 0px"
        {...getOverrideProps(overrides, "welcomepromptsec")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="687px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={contactcentermodel?.welcomeprompt}
          {...getOverrideProps(
            overrides,
            'Thank you for calling Houston Methodist, Customer Service. <break time="1s"/> If this is an emergency, please hangup, and dial 911. <break time="1s"/>This call may be recorded for quality and training purposes. <break time="1s"/>'
          )}
        ></Text>
      </Flex>
      <Flex
        gap="1px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 0px 10px 0px"
        {...getOverrideProps(overrides, "mainivrcontent")}
      >
        <Flex
          gap="15px"
          direction="column"
          width="346px"
          height="249px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(64,170,191,1)"
          {...getOverrideProps(overrides, "ivrbuttonsec")}
        >
          <View
            width="285px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "rowone")}
          >
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="-1px"
              size="default"
              isDisabled={false}
              variation="default"
              children="1"
              {...getOverrideProps(overrides, "ButtonOne")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="99px"
              size="default"
              isDisabled={false}
              variation="default"
              children="2"
              {...getOverrideProps(overrides, "ButtonTwo")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="199px"
              size="default"
              isDisabled={false}
              variation="default"
              children="3"
              {...getOverrideProps(overrides, "ButtonThree")}
            ></Button>
          </View>
          <View
            width="285px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "rowtwo")}
          >
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="-1px"
              size="default"
              isDisabled={false}
              variation="default"
              children="4"
              {...getOverrideProps(overrides, "ButtonFour")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="99px"
              size="default"
              isDisabled={false}
              variation="default"
              children="5"
              {...getOverrideProps(overrides, "ButtonFive")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="199px"
              size="default"
              isDisabled={false}
              variation="default"
              children="6"
              {...getOverrideProps(overrides, "ButtonSix")}
            ></Button>
          </View>
          <View
            width="285px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "rowthree")}
          >
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="-1px"
              size="default"
              isDisabled={false}
              variation="default"
              children="7"
              {...getOverrideProps(overrides, "ButtonSeven")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="99px"
              size="default"
              isDisabled={false}
              variation="default"
              children="8"
              {...getOverrideProps(overrides, "ButtonEight")}
            ></Button>
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="199px"
              size="default"
              isDisabled={false}
              variation="default"
              children="9"
              {...getOverrideProps(overrides, "ButtonNine")}
            ></Button>
          </View>
          <View
            width="85px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "row4")}
          >
            <Button
              width="87px"
              height="42px"
              position="absolute"
              top="-1px"
              left="-1px"
              size="default"
              isDisabled={false}
              variation="default"
              children="0"
              {...getOverrideProps(overrides, "ButtonZero")}
            ></Button>
          </View>
        </Flex>
        <Flex
          gap="1px"
          direction="row"
          width="358px"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "todsec")}
        >
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 6px 8px 6px"
            {...getOverrideProps(overrides, "daysec")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Days"
              {...getOverrideProps(overrides, "Days")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="MON"
              {...getOverrideProps(overrides, "MON")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="TUE"
              {...getOverrideProps(overrides, "TUE")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="WED"
              {...getOverrideProps(overrides, "WED")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="THU"
              {...getOverrideProps(overrides, "THU")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="FRI"
              {...getOverrideProps(overrides, "FRI")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="SAT"
              {...getOverrideProps(overrides, "SAT")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="SUN"
              {...getOverrideProps(overrides, "SUN")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 6px 8px 6px"
            {...getOverrideProps(overrides, "openttodsec")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Open"
              {...getOverrideProps(overrides, "opentitle")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="8:00 AM"
              {...getOverrideProps(overrides, "openlabel1")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="8:00 AM"
              {...getOverrideProps(overrides, "openlabel2")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="8:00 AM"
              {...getOverrideProps(overrides, "openlabel3")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="8:00 AM"
              {...getOverrideProps(overrides, "openlabel4")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="8:00 AM"
              {...getOverrideProps(overrides, "openlabel5")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Closed"
              {...getOverrideProps(overrides, "openlabel6")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Closed"
              {...getOverrideProps(overrides, "openlabel0")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 6px 8px 6px"
            {...getOverrideProps(overrides, "2ndclosettodsec")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="2nd Close"
              {...getOverrideProps(overrides, "secclosetitle")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11:30 AM"
              {...getOverrideProps(overrides, "seccloselabel1")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11:30 AM"
              {...getOverrideProps(overrides, "seccloselabel2")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11:30 AM"
              {...getOverrideProps(overrides, "seccloselabel3")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11:30 AM"
              {...getOverrideProps(overrides, "seccloselabel4")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11:30 AM"
              {...getOverrideProps(overrides, "seccloselabel5")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NA"
              {...getOverrideProps(overrides, "seccloselabel6")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NA"
              {...getOverrideProps(overrides, "seccloselabel0")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 6px 8px 6px"
            {...getOverrideProps(overrides, "closetodsec38746950")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="2nd Open"
              {...getOverrideProps(overrides, "secopentitle")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1:30 PM"
              {...getOverrideProps(overrides, "secopenlabel1")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1:30 PM"
              {...getOverrideProps(overrides, "secopenlabel2")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1:30 PM"
              {...getOverrideProps(overrides, "secopenlabel3")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1:30 PM"
              {...getOverrideProps(overrides, "secopenlabel4")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1:30 PM"
              {...getOverrideProps(overrides, "secopenlabel5")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NA"
              {...getOverrideProps(overrides, "secopenlabel6")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NA"
              {...getOverrideProps(overrides, "secopenlabel7")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 6px 8px 6px"
            {...getOverrideProps(overrides, "closetodsec38746969")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Close"
              {...getOverrideProps(overrides, "Closetitle")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="5:00 PM"
              {...getOverrideProps(overrides, "closelabel1")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="5:00 PM"
              {...getOverrideProps(overrides, "closelabel2")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="5:00 PM"
              {...getOverrideProps(overrides, "closelabel3")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="5:00 PM"
              {...getOverrideProps(overrides, "closelabel4")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="5:00 PM"
              {...getOverrideProps(overrides, "closelabel5")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Closed"
              {...getOverrideProps(overrides, "closelabel6")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="65px"
              height="21px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Closed"
              {...getOverrideProps(overrides, "closelabel0")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "border38746981")}
      >
        <Divider
          width="706px"
          height="3px"
          shrink="0"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider38746982")}
        ></Divider>
      </Flex>
      <Flex
        gap="7px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "altmenus")}
      >
        <SwitchField
          width="unset"
          height="unset"
          label="Off"
          shrink="0"
          size="default"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField")}
        ></SwitchField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Override"
          {...getOverrideProps(overrides, "ButtonOverride")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Afterhours"
          {...getOverrideProps(overrides, "ButtonAfterhours")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Holiday"
          {...getOverrideProps(overrides, "ButtonHoliday")}
        ></Button>
      </Flex>
    </Flex>
  );
}

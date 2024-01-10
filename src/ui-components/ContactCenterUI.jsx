/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Divider,
  Flex,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ContactCenterUI(props) {
<<<<<<< HEAD
  const { overrides, ...rest } = props;
=======
  const { contactcentermodel, overrides, ...rest } = props;
  const ccnameOnClick = useNavigateAction({
    type: "url",
    url: `${"/admin/"}${contactcentermodel?.id}`,
  });
>>>>>>> dev
  return (
    <Flex
      gap="0"
      direction="column"
      width="790px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "ContactCenterUI")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="780px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="13px 19px 13px 19px"
        {...getOverrideProps(overrides, "content")}
      >
        <Flex
          gap="135px"
          direction="row"
          width="738px"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
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
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
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
<<<<<<< HEAD
              children="Single Billing Office"
=======
              className="clickAble"
              children={contactcentermodel?.ccname}
              onClick={() => {
                ccnameOnClick();
              }}
>>>>>>> dev
              {...getOverrideProps(overrides, "ccname")}
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
              children="713-366-5600"
              {...getOverrideProps(overrides, "ccmainnumber")}
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
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
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
              {...getOverrideProps(overrides, "currentstatsvalue")}
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
            width="unset"
            height="3px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider3869742")}
          ></Divider>
        </Flex>
        <Flex
          gap="5px"
          direction="row"
          width="738px"
          height="100px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
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
            lineHeight="22.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.3px"
            width="738px"
            height="72px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children='Thank you for calling Houston Methodist, Customer Service.  <break time="1s"/> If this is an emergency, please hangup, and dial 911.  <break time="1s"/>This call may be recorded for quality and training purposes. <break time="1s"/> huidshuidshufusduhuifshihu jjdfsjiksdbuisd jisdhuisdhidu] jioudshiudshu nidsuhuid'
            {...getOverrideProps(
              overrides,
              'Thank you for calling Houston Methodist, Customer Service. <break time="1s"/> If this is an emergency, please hangup, and dial 911. <break time="1s"/>This call may be recorded for quality and training purposes. <break time="1s"/> huidshuidshufusduhuifshihu jjdfsjiksdbuisd jisdhuisdhidu] jioudshiudshu nidsuhuid'
            )}
          ></Text>
        </Flex>
        <Flex
          gap="1px"
          direction="row"
          width="738px"
          height="269px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "mainivrcontent")}
        >
          <Flex
            gap="13px"
            direction="column"
            width="346px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 8px 0px"
            backgroundColor="rgba(64,170,191,1)"
            {...getOverrideProps(overrides, "ivrbuttonsec")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 6px 0px 6px"
              {...getOverrideProps(overrides, "ivrtitle")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="332px"
                height="29px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Spanish Menu Enabled"
                {...getOverrideProps(overrides, "spanishMenu")}
              ></Text>
            </Flex>
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
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
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
                fontSize="16px"
                fontWeight="800"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
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
                {...getOverrideProps(overrides, "dayyArray1")}
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
                {...getOverrideProps(overrides, "dayyArray2")}
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
                {...getOverrideProps(overrides, "dayyArray3")}
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
                {...getOverrideProps(overrides, "dayyArray4")}
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
                {...getOverrideProps(overrides, "dayyArray5")}
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
                {...getOverrideProps(overrides, "dayyArray6")}
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
                {...getOverrideProps(overrides, "dayyArray0")}
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
                fontSize="16px"
                fontWeight="800"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
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
                {...getOverrideProps(overrides, "openArray1")}
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
                {...getOverrideProps(overrides, "openArray2")}
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
                {...getOverrideProps(overrides, "openArray3")}
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
                {...getOverrideProps(overrides, "openArray4")}
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
                {...getOverrideProps(overrides, "openArray5")}
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
                {...getOverrideProps(overrides, "openArray6")}
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
                {...getOverrideProps(overrides, "openArray0")}
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
                fontSize="16px"
                fontWeight="800"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
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
                {...getOverrideProps(overrides, "seccloseArray1")}
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
                {...getOverrideProps(overrides, "seccloseArray2")}
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
                {...getOverrideProps(overrides, "seccloseArray3")}
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
                {...getOverrideProps(overrides, "seccloseArray4")}
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
                {...getOverrideProps(overrides, "seccloseArray5")}
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
                {...getOverrideProps(overrides, "seccloseArray6")}
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
                {...getOverrideProps(overrides, "seccloseArray0")}
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
                fontSize="16px"
                fontWeight="800"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
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
                {...getOverrideProps(overrides, "secopenArray1")}
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
                {...getOverrideProps(overrides, "secopenArray2")}
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
                {...getOverrideProps(overrides, "secopenArray3")}
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
                {...getOverrideProps(overrides, "secopenArray4")}
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
                {...getOverrideProps(overrides, "secopenArray5")}
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
                {...getOverrideProps(overrides, "secopenArray6")}
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
                {...getOverrideProps(overrides, "secopenArray0")}
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
                fontSize="16px"
                fontWeight="800"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
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
                {...getOverrideProps(overrides, "closeArray1")}
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
                {...getOverrideProps(overrides, "closeArray2")}
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
                {...getOverrideProps(overrides, "closeArray3")}
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
                {...getOverrideProps(overrides, "closeArray4")}
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
                {...getOverrideProps(overrides, "closeArray5")}
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
                {...getOverrideProps(overrides, "closeArray6")}
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
                {...getOverrideProps(overrides, "closeArray0")}
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
            width="unset"
            height="3px"
            shrink="0"
            alignSelf="stretch"
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
          alignSelf="stretch"
          position="relative"
          padding="7px 5px 7px 5px"
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
            children="Secondary"
            {...getOverrideProps(overrides, "ButtonSecondary")}
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
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="17px"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 4px 0px 4px"
          {...getOverrideProps(overrides, "footer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="8px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="9.681818008422852px"
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
            children="Last updated:"
            {...getOverrideProps(overrides, "Last updated:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="8px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="9.681818008422852px"
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
            children="2023-12-06T19:23:33.617Z"
            {...getOverrideProps(overrides, "lastupdate")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="8px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="9.681818008422852px"
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
            children="by"
            {...getOverrideProps(overrides, "by")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="8px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="9.681818008422852px"
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
            children="mlwindon@houstonmethodist.org"
            {...getOverrideProps(overrides, "lastuser")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

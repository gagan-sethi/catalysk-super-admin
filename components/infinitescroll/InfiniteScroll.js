import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import { Dialog } from "primereact/dialog";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Link from "next/link";
import { useState, useEffect, useRef ,memo} from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import { httpRequest } from "../../src/utils/httpRequest";
import Loder from "../../src/components/loader";
import Poll from "../../src/components/poll";
import CustomModal from "../../src/components/customModal";

const Infintescroll = ({id,chooseOption,url="votedUsers", title=""}) => {
    const router=useRouter();

  const [voterData, setvoterData] = useState([]);

  //voter
  const [pageSize]=useState(5);
  const [voterPage, setVoterPage] = useState(1);
  const [voterApiCalled, setVoterApiCalled] = useState(false);
  const [totalVoterPage, setTotalVoterPage] = useState(1);
  const inputRef = useRef();

  const getPoll = async (id) => {




    if (id,url){
      const limit = pageSize;
      const params = {
        limit: limit,
        event_id:id,
        option: chooseOption
          ? chooseOption[0].toUpperCase() + chooseOption.slice(1)
          : "",
        offset: (voterPage - 1) * limit,
        sort: -1,
      };
      const response = await httpRequest(
        `${url}`,
        "GET",
        null,
        params,
        true,
        false,
        router
      );

      if (response) {
        // console.log("users", response);
        setvoterData([...voterData, ...response?.data]);
        setTotalVoterPage(Math.ceil(response.count / limit));
        setVoterApiCalled(false);
      }
    }
  };

  const handleVoterScroll = () => {
    const voterScroll = inputRef.current;
    // console.log("scroll");
    const bottomDistance =
      voterScroll.scrollHeight -
      (voterScroll.scrollTop + voterScroll.clientHeight);
    // console.log("bottomDistance", bottomDistance);

    if (bottomDistance < 10 && !voterApiCalled) {
    //   console.log("bottomDistance0001", bottomDistance);

      if (voterPage < totalVoterPage) {
        setVoterPage(voterPage + 1);
      }

      setVoterApiCalled(true);
    }
  };
  useEffect(() => {
    getPoll(id);
  }, [id, chooseOption, voterPage]);
  console.log("voterData",voterData)

  return (
    <>
      <Card className="p-3 comnCards">
        <h5 className="mb-4">{title}</h5>
        <div
          className="m-0 h-100 likedByList"
          ref={inputRef}
          onScroll={handleVoterScroll}
        >
          <div>
            {voterData?.length > 0 ? (
              voterData?.map((element, index) => (
                <p className="list-group" key={index}>
                  <div className="sellerDtls d-flex align-items-center gap-3">
                    <Image
                      src={
                        element?.profile_image
                          ? `${process.env.NEXT_PUBLIC_STORAGE_PATH}${element?.profile_image}`
                          : "/noprofile.png"
                      }
                      className="rounded-circle tblItemImg"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div>
                      <h6 className="mb-1">{element?.full_name}</h6>
                      <p className="mb-0">{element?.email}</p>
                    </div>
                  </div>
                </p>
              ))
            ) : (
              <>
                <div className="likedByList d-flex align-items-center justify-content-center">
                  <h5 className="opacity-50">No data found</h5>
                </div>
              </>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default memo(Infintescroll);

import "./App.css";
import Card from "./StyledComponents/Card";
import GlobalStyle from "./StyledComponents/GlobalCss";
import Notification from "./StyledComponents/Notification";
import ListComponent from "./StyledComponents/ListComponent";
import UlComponent from "./StyledComponents/UlComponent";
import data from "./data.json";
import { isValidElement, useState } from "react";
export default function App() {
  const [notification, setNotification] = useState(data);
  const notificationCaundt  = notification.filter(
    (notification) => !notification.isRead
  ).length;
  return (
    <>
      <GlobalStyle />
      <Card>
        <Notification>
          <h1>
            Notifications <span>{notificationCaundt}</span>
          </h1>
          <button
            onClick={() => {
              let result = notification.map((results) => {
                return { ...results, isRead: true };
              });
              setNotification(result);
            }}
          >
            Mark all as read
          </button>
        </Notification>
        <UlComponent>
          {notification.map((datas) => {
            return (
              <ListComponent
                key={datas.id}
                style={!datas.isRead ? { backgroundColor: "#F7FAFD" } : {}}
                onClick={() => {
                  const newNotification = notification.map((countMassage) => {
                    if (datas.id === countMassage.id) {
                      return { ...countMassage, isRead: true };
                    }
                    return countMassage;
                  });
                  setNotification(newNotification);
                }}
              >
                <img src={datas.profilepic} />
                <div>
                  <span className="username">{datas.Username}</span>
                  <span className="action">{datas.action}</span>
                  <span className="post">{datas.post}</span>
                  <span className="grupeName">{datas.grupeName}</span>
                  <h3 className="time">{datas.time}</h3>
                  {datas.userPhoto ? (
                    <img className="userPhoto" src={datas.userPhoto} />
                  ) : null}
                </div>
              </ListComponent>
            );
          })}
        </UlComponent>
      </Card>
    </>
  );
}

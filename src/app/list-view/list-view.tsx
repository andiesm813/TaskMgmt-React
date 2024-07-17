import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrInput, IgrInputModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './list-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrInputModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function ListView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const newTaskDialog2 = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("row-layout list-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>assignment</span>
              </span>
              <h6 className={classes("h6")}>
                <span>To do</span>
              </h6>
            </div>
            <IgrAvatar initials="3" shape="circle" className={classes("avatar")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Create brand guidelines</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 19, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_2")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>App Preview</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 24, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_3")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Cloud Integration</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 28, 2021</div>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_3")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>developer_board</span>
              </span>
              <h6 className={classes("h6")}>
                <span>In Development</span>
              </h6>
            </div>
            <IgrAvatar initials="5" shape="circle" className={classes("avatar_4")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_5")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Connect to DataSources</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 28, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_6")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Build App</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 28, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_7")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Copy-Paste Update</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 24, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_8")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Grid Data-Binding </div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 26, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_9")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Main Dashboard Design</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 20, 2021</div>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_4")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>assignment_late</span>
              </span>
              <h6 className={classes("h6")}>
                <span>Validation</span>
              </h6>
            </div>
            <IgrAvatar initials="4" shape="circle" className={classes("avatar_10")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar7.png" shape="circle" className={classes("avatar_11")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Update Samples</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 15, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_12")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Floating Toolbar</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 14, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_13")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Input Update</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 17, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_14")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>App Library</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 16, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_5")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>check_circle</span>
              </span>
              <h6 className={classes("h6")}>
                <span>Done</span>
              </h6>
            </div>
            <IgrAvatar initials="5" shape="circle" className={classes("avatar_15")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar8.png" shape="circle" className={classes("avatar_16")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Onboarding Experience</div>
              <div slot="subtitle" key={uuid()}>October 13, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_17")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Design Specs</div>
              <div slot="subtitle" key={uuid()}>October 9, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_18")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>File Parser</div>
              <div slot="subtitle" key={uuid()}>October 10, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_19")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Final Mockups</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 14, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_20")}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>GitHub Integration</div>
              <div slot="subtitle" key={uuid()}>September 30, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog2}>
          <h5 slot="title" key={uuid()}>
            <span>Add New Task</span>
          </h5>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <IgrInput label="Task Title" outlined="false" className={classes("input")}></IgrInput>
            <div className={classes("row-layout group_7")}>
              <IgrSelect outlined="false" label="Project" placeholder="Pick a project" className={classes("select")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>assignment</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="9457d027-48e3-45f2-902f-e0857e119d21">
                  <span key={uuid()}>Fintech Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="13f8ddda-bc63-4a39-8023-cdcb01fba27f">
                  <span key={uuid()}>DataViz Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="98d254e8-fbfa-4119-9c5f-7e8c5609a91a">
                  <span key={uuid()}>Onboarding Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="8c21bd73-c62b-4d6f-89f8-31d7d67fc284">
                  <span key={uuid()}>AppBuilder Project</span>
                </IgrSelectItem>
              </IgrSelect>
              <IgrSelect outlined="false" label="Status" placeholder="Set Status" className={classes("select_1")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>schedule</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="ba3af7a3-2a9c-4bde-b8b8-e9ee41e9d8e4">
                  <span key={uuid()}>To Do</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="9fd50c7f-da21-4553-b568-5f85b0191f7e">
                  <span key={uuid()}>In Development</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="9ab62337-1361-4d2f-a140-3f5ce982507f">
                  <span key={uuid()}>Validation</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="610848fb-d8c5-4de7-97e3-b610843eaafe">
                  <span key={uuid()}>Done</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton size="large" clicked={() => newTaskDialog2?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>Create Task</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrButton variant="fab" size="large" clicked={() => newTaskDialog2?.current?.toggle()} className={classes("button_1 button_1_1")}>
          <span className={classes("material-icons icon_3")} key={uuid()}>
            <span key={uuid()}>add</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}

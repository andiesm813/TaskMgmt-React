import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './kanban-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function KanbanView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const newTaskDialog1 = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("column-layout kanban-view-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>assignment</span>
                </span>
                <h6 className={classes("h6")}>
                  <span>To do</span>
                </h6>
              </div>
              <IgrAvatar initials="3" shape="circle" className={classes("avatar")}></IgrAvatar>
            </div>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Create brand guidelines</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Nov 19, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/BrandGuidelines.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_2")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>App Preview</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Nov 24, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/AppPreview.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_3")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Cloud Integration</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Nov 28, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_4")}>
              <div className={classes("row-layout group_3")}>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>developer_board</span>
                </span>
                <h6 className={classes("h6")}>
                  <span>In Development</span>
                </h6>
              </div>
              <IgrAvatar initials="5" shape="circle" className={classes("avatar_4")}></IgrAvatar>
            </div>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_5")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Connect to DataSources</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 28, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_6")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Build App</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 28, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/BuildApp.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <p className={classes("typography__body-1 text")} key={uuid()}>
                  <span>Body 1</span>
                </p>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_7")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Copy-Paste Update</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 24, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_8")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Grid Data-Binding </span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 26, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar10.png" shape="circle" className={classes("avatar_9")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Main Dashboard Design</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 20, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
          <div className={classes("column-layout group_5")}>
            <div className={classes("row-layout group_6")}>
              <div className={classes("row-layout group_3")}>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>assignment_late</span>
                </span>
                <h6 className={classes("h6")}>
                  <span>Validation</span>
                </h6>
              </div>
              <IgrAvatar initials="4" shape="circle" className={classes("avatar_10")}></IgrAvatar>
            </div>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar7.png" shape="circle" className={classes("avatar_11")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Update Samples</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 15, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/Samples.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_12")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Floating Toolbar</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 14, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_13")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Input Update</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 17, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/Inputs.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_14")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>App Library</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Deadline: Oct 16, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/AppLIbrary.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>COMPLETE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_7")}>
              <div className={classes("row-layout group_3")}>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>check_circle</span>
                </span>
                <h6 className={classes("h6")}>
                  <span>Done</span>
                </h6>
              </div>
              <IgrAvatar initials="5" shape="circle" className={classes("avatar_15")}></IgrAvatar>
            </div>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar8.png" shape="circle" className={classes("avatar_16")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Onboarding Experience</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>October 13, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>ARCHIVE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_17")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Design Specs</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>October 9, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>ARCHIVE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_18")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>File Parser</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>October 10, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>ARCHIVE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_19")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Final Mockups</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>October 13, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>ARCHIVE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_20")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>GitHub Integration</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>September 30, 2021</span>
                </h5>
              </IgrCardHeader>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/Samples.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>attach_file</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>archive</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrIconButton variant="flat" className={classes("icon-button")}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>ARCHIVE</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog1}>
          <h5 slot="title" key={uuid()}>
            <span>Add New Task</span>
          </h5>
          <div className={classes("column-layout group_8")} key={uuid()}>
            <IgrInput label="Task Title" outlined="false" className={classes("input")}></IgrInput>
            <div className={classes("row-layout group_9")}>
              <IgrSelect outlined="false" label="Project" placeholder="Pick a project" className={classes("select")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>assignment</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="c58346be-7777-448f-8bd4-2de77dbc5986">
                  <span key={uuid()}>Fintech Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="2e85b1d4-85c2-48a4-bf66-1fdb78a61240">
                  <span key={uuid()}>DataViz Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="0e2401e2-0340-4be9-a9de-14c3229e1589">
                  <span key={uuid()}>Onboarding Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="2697b5b2-060d-4677-a46f-6a5a36167637">
                  <span key={uuid()}>AppBuilder Project</span>
                </IgrSelectItem>
              </IgrSelect>
              <IgrSelect outlined="false" label="Status" placeholder="Set Status" className={classes("select_1")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>schedule</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="cf65472f-526e-4730-888f-141f3e4cb0a3">
                  <span key={uuid()}>To Do</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="5a92fbf3-6583-4ba0-8a11-8e06a7aa97b9">
                  <span key={uuid()}>In Development</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="e0481c26-3ef9-4dd1-9f44-4fd3f70cbab9">
                  <span key={uuid()}>Validation</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="c42e9491-bc29-4c62-9280-ebde6db880c0">
                  <span key={uuid()}>Done</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton size="large" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Create Task</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrButton variant="fab" size="large" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button_2 button_2_1")}>
          <span className={classes("material-icons icon_3")} key={uuid()}>
            <span key={uuid()}>add</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}

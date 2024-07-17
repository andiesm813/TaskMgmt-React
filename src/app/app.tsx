import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownHeader, IgrDropdownHeaderModule, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrToggleButton, IgrToggleButtonModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownHeaderModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrToggleButtonModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dropdown = useRef<IgrDropdown>(null);
  const newTaskDialog = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("app-bar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>dashboard</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>Task Management</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" clicked={() => newTaskDialog?.current?.toggle()} className={classes("icon-button_1")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>add_circle</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button_2")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>share</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button_3")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>notifications</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button_4")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button_5")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>account_circle</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <div className={classes("column-layout group_2")}>
            <div className={classes("row-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <IgrAvatar initials="FP" shape="circle" className={classes("avatar avatar_1")}></IgrAvatar>
                <h6 className={classes("h6_1")}>
                  <span>Fintech Project</span>
                </h6>
                <IgrIconButton variant="flat" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>keyboard_arrow_down</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                  <IgrDropdownHeader key={uuid()}>
                    <span key={uuid()}>Projects</span>
                  </IgrDropdownHeader>
                  <IgrDropdownItem key={uuid()}>
                    <span key={uuid()}>Fintech Project</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem key={uuid()}>
                    <span key={uuid()}>Project Name 1</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem key={uuid()}>
                    <span key={uuid()}>Project Name 2</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem key={uuid()}>
                    <span key={uuid()}>Project Name 3</span>
                  </IgrDropdownItem>
                </IgrDropdown>
              </div>
              <IgrButtonGroup className={classes("button-group")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/kanban-view`)} key={uuid()}>
                  <IgrToggleButton>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>dashboard</span>
                    </span>
                    <span key={uuid()}>Kanban</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrToggleButton>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/list-view`)} key={uuid()}>
                  <IgrToggleButton>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>format_list_bulleted</span>
                    </span>
                    <span key={uuid()}>List</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrToggleButton>
                </div>
              </IgrButtonGroup>
            </div>
            <div className={classes("view-container")}>
              <Outlet></Outlet>
            </div>
          </div>
          <div className={classes("column-layout group_5")}>
            <span className={classes("material-icons icon_1")}>
              <span key={uuid()}>group_add</span>
            </span>
            <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1_1")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_1_2")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_1_3")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_1_4")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar7.png" shape="circle" className={classes("avatar_1_5")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar8.png" shape="circle" className={classes("avatar_1_6")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_1_7")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_1_8")}></IgrAvatar>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog}>
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
                <IgrSelectItem value="Option" key="816f2a20-f0c3-4926-81f9-33825562e87d">
                  <span key={uuid()}>Fintech Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="c155ead0-4bbf-4ff6-8fb5-18d485abf5f0">
                  <span key={uuid()}>DataViz Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="665dfa3c-9e10-419c-85e9-369b1746b0b2">
                  <span key={uuid()}>Onboarding Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="0dd1725d-baec-4570-a1c4-e206acdae12b">
                  <span key={uuid()}>AppBuilder Project</span>
                </IgrSelectItem>
              </IgrSelect>
              <IgrSelect outlined="false" label="Status" placeholder="Set Status" className={classes("select_1")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>schedule</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="8f13ae57-721b-4f91-8e95-e75fa7fb69fa">
                  <span key={uuid()}>To Do</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="136f1388-812d-421e-8ba0-572524faa572">
                  <span key={uuid()}>In Development</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="f2e81d81-ac0b-465a-aa6d-7e94a08ce6ee">
                  <span key={uuid()}>Validation</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="e0754005-8418-4500-a723-59a798889eca">
                  <span key={uuid()}>Done</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton size="large" clicked={() => newTaskDialog?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>Create Task</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}

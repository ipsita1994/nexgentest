/**
 * Created by INFLUXIQ-05 on 31-10-2018.
 */


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {FunnelComponent} from "./funnel/funnel.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminmanagementComponent} from "./adminmanagement/adminmanagement.component";
import {RegionalRecruiterComponent} from "./regional-recruiter/regional-recruiter.component";
import {RepComponent} from "./rep/rep.component";
import {RegionalDashboardComponent} from "./regional-dashboard/regional-dashboard.component";
import {RepDashboardComponent} from "./rep-dashboard/rep-dashboard.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ContractComponent} from "./contract/contract.component";
import {TranningcategorymanagementComponent} from "./tranningcategorymanagement/tranningcategorymanagement.component";
import {UseraccountsettingComponent} from "./useraccountsetting/useraccountsetting.component";
import {RepresentativelistComponent} from "./representativelist/representativelist.component";
import {RepTraingcenterComponent} from "./rep-traingcenter/rep-traingcenter.component";
import {TrialsComponent} from "./trials/trials.component";
import {TrainingsectionComponent} from "./trainingsection/trainingsection.component";
import {TrainingsectionlistComponent} from "./trainingsectionlist/trainingsectionlist.component";
import {FrontendheaderComponent} from "./frontendheader/frontendheader.component";
import {FrontendfooterComponent} from "./frontendfooter/frontendfooter.component";
import {FrontendhomeComponent} from "./frontendhome/frontendhome.component";

import {WhoWeAreComponent} from "./who-we-are/who-we-are.component";
import {AboutPcrTestingComponent} from "./about-pcr-testing/about-pcr-testing.component";
import {GetStartedComponent} from "./get-started/get-started.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {RepdetailsComponent} from "./repdetails/repdetails.component";
import {ReplegaldocumentComponent} from "./replegaldocument/replegaldocument.component";
import {LegaldoclistComponent} from "./legaldoclist/legaldoclist.component";
import {DigitalcontractComponent} from "./digitalcontract/digitalcontract.component";
import {UsermanagementComponent} from "./usermanagement/usermanagement.component";
import {TrainingcenterreoprtComponent} from "./trainingcenterreoprt/trainingcenterreoprt.component";
import {EventmanagementComponent} from "./eventmanagement/eventmanagement.component";
import {RepeventlistComponent} from "./repeventlist/repeventlist.component";
import {ResourcecategoryComponent} from "./resourcecategory/resourcecategory.component";
import {ResourcesComponent} from "./resources/resources.component";
import {MyresourceComponent} from "./myresource/myresource.component";
import {ManagequizComponent} from "./managequiz/managequiz.component";
import { TestresolveService } from './testresolve.service';
import {TempaccessComponent} from "./tempaccess/tempaccess.component";
import {TestComponent} from "./test/test.component";
import {ForgetpasswordComponent} from "./forgetpassword/forgetpassword.component";
import {SlotviewComponent} from "./slotview/slotview.component";
import {AppointmentlistComponent} from "./appointmentlist/appointmentlist.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";

const appRoutes: Routes = [
 //{ path: '', redirectTo:'/login', pathMatch: 'full' },
    { path: 'login', component:  LoginComponent},
    { path: 'funnel', component: FunnelComponent},
    { path: 'dashboard', component: DashboardComponent, resolve: {results: TestresolveService},data: { link: 'datalist',source:'users',condition:{type:'rep'} }},
 //   { path: 'dashboard', component: DashboardComponent},
    { path: 'admin', component: AdminmanagementComponent},
    { path: 'regional', component: RegionalRecruiterComponent},
    { path: 'rep', component: RepComponent},
    { path: 'regionaldashboard', component: RegionalDashboardComponent},
    { path: 'repdashboard', component: RepDashboardComponent},
    { path: 'signup/:id', component: SignupComponent},
   /* { path: '', component: HomeComponent},*/
    { path: 'contract', component: ContractComponent},
    {path: 'regionaldashboard', component: RegionalRecruiterComponent},
    {path: 'tranningcategory', component: TranningcategorymanagementComponent},
    {path: 'addtrainings', component: TranningcategorymanagementComponent},
    { path:'useraccountsetting', component: UseraccountsettingComponent},
    { path:'useraccountsetting/:id', component: UseraccountsettingComponent},
    { path: 'representativelist', component: RepresentativelistComponent},
    { path: 'reptrainingcenter', component: RepTraingcenterComponent},
    { path: 'reptrainingcenter/:cid', component: RepTraingcenterComponent}, // cat id
    { path: 'reptrainingcenter/:cid/:lid', component: RepTraingcenterComponent}, // lesson id
    { path:'trial', component: TrialsComponent},
    { path:'trainingsectionlist', component: TrainingsectionlistComponent},
    { path:'trainingsection', component: TrainingsectionComponent},
    { path:'trainingsection/:id', component: TrainingsectionComponent},
    { path:'frontendheader', component: FrontendheaderComponent},
    { path:'frontendfooter', component: FrontendfooterComponent},
    { path:'', component: FrontendhomeComponent},
    { path:'who_we_are', component: WhoWeAreComponent},
    { path:'about_pcr_testing', component: AboutPcrTestingComponent},
    { path:'get_started', component: GetStartedComponent},
    { path:'contact_us', component: ContactUsComponent},
    { path:'repdetails/:id', component: RepdetailsComponent},
    { path:'replegaldocuments', component: ReplegaldocumentComponent},
    { path:'legaldoclist', component: LegaldoclistComponent},
    { path:'digitalcontract', component: DigitalcontractComponent},
    { path:'usermanagement', component: UsermanagementComponent},
    { path:'trainingreport', component: TrainingcenterreoprtComponent},
    { path:'event', component: EventmanagementComponent},
    { path:'event/:at/:val/:rt', component: EventmanagementComponent},
    { path:'calendar', component: EventmanagementComponent},
    { path:'calendar/:at/:val/:rt', component: EventmanagementComponent},
    { path:'repevent/:id', component: RepeventlistComponent},
    { path:'resourcecategory', component: ResourcecategoryComponent},
    { path:'resources', component: ResourcesComponent},
    { path:'myresource', component: MyresourceComponent},
    { path:'myresource/:catid', component: MyresourceComponent},
    { path:'managequiz/:lessonid', component: ManagequizComponent},
    {path: 'tempaccess', component: TempaccessComponent},
    {path: 'test', component: TestComponent},
    {path: 'forgetpassword', component: ForgetpasswordComponent},
    {path: 'slotview', component: SlotviewComponent},
    {path: 'slotview/:id', component: SlotviewComponent},
    {path: 'appointmentlist', component: AppointmentlistComponent},
    {path: 'resetpassword/:id', component: ResetpasswordComponent},

];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: false });


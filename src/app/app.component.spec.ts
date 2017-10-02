import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatSidenavModule, MatListModule, MatTableModule, MdPaginatorModule, MatTooltipModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MdButtonModule, 
        MdCardModule, 
        MdMenuModule, 
        MdToolbarModule, 
        MdIconModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MdPaginatorModule,
        MatTooltipModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Canstar');
  }));
});

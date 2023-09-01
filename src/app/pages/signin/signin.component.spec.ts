import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  describe('given form', () => {
    it('when email is empty, then recover password button should be disabled', () => {
      component.form.get('email')?.setValue('');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })

    it('when email is invalid, then recover password button should be disabled', () => {
      component.form.get('email')?.setValue('invalidEmail');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })

    it('when email is valid, then recover password button should be enabled', () => {
      component.form.get('email')?.setValue('valid@Email.com');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="recover-password-button"]').disabled).toBeFalsy();
    })
    it('when email is empty, then login button should be disabled', () => {
      component.form.get('email')?.setValue('');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="login-button"]').disabled).toBeTruthy();
    })
    it('when email is invalid, then login button should be disabled', () => {
      component.form.get('email')?.setValue('invalidEmail');
      component.form.get('password')?.setValue('');

      fixture.detectChanges();

      expect(page.querySelecter('[test-id="login-button"]').disabled).toBeTruthy();
    })
    it('when password is empty, then login button should be disabled', () => {
      component.form.get('email')?.setValue('valid@email.com');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="login-button"]').disabled).toBeTruthy();
    })
    it('when password is not empty, then login button should be enabled', () => {
      component.form.get('email')?.setValue('valid@email.com');
      component.form.get('password')?.setValue('anyPassword');
      fixture.detectChanges();

      expect(page.querySelecter('[test-id="login-button"]').disabled).toBeFalsy();
    })
  })
});

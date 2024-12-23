import { NgWizardStepContentDirective } from './ng-wizard-step-content.directive';
import { ViewContainerRef } from '@angular/core';

describe('NgWizardStepContentDirective', () => {
  it('should create an instance', () => {
    const mockViewContainerRef = {} as ViewContainerRef; // Mock de ViewContainerRef
    const directive = new NgWizardStepContentDirective(mockViewContainerRef);
    expect(directive).toBeTruthy();
  });
});

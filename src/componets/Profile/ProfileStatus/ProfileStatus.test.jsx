import { render } from "@testing-library/react"
import { create } from 'react-test-renderer';
import ProfielStatus from './ProfileStatus';

describe("Profile status component", () => {
    test("status form props should be state", () => {
        const component = create(<ProfielStatus status="it-kamustra" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamustra')
    })
})
#include "MainComponent.h"

//==============================================================================
MainComponent::MainComponent()
{
    juce::File sourceDir = juce::File(__FILE__).getParentDirectory();
    juce::File bundle    = sourceDir.getChildFile("jsui/build/js/main.js");

    jassert(bundle.existsAsFile());

    addAndMakeVisible(appRoot);
    appRoot.evaluate(bundle);

    setSize (600, 400);
}

MainComponent::~MainComponent()
{
}

//==============================================================================
void MainComponent::resized()
{
    // We're building the entire UI using JS so our appRoot fills the entire
    // component.
    appRoot.setBounds(getLocalBounds());
}

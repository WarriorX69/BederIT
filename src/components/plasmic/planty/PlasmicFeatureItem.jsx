// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ozcq8GxerrF1WYaqjsW34y
// Component: 0qu_kH_ddiMZdR
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: E6EaS9_QHu4_4J/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: ozcq8GxerrF1WYaqjsW34y/projectcss
import sty from "./PlasmicFeatureItem.module.css"; // plasmic-import: 0qu_kH_ddiMZdR/css

export const PlasmicFeatureItem__VariantProps = new Array();

export const PlasmicFeatureItem__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFeatureItem__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__snMpz)}>
        <div className={classNames(projectcss.all, sty.freeBox__lg3Q)} />
        <div className={classNames(projectcss.all, sty.freeBox__kIf2P)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ith5O)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rIDu4
              )}
            >
              {"Unlimited Table Collection"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0SeDc
              )}
            >
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
              }
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__qkPl9)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qr8LX
                )}
              >
                {"Starting from"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vcg4C
                )}
              >
                {" $399"}
              </div>
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__b3V6)}
            >
              <LinkButton
                data-plasmic-name={"linkButton"}
                data-plasmic-override={overrides.linkButton}
                className={classNames("__wab_instance", sty.linkButton)}
                text={"View More"}
                type={"solidOrange"}
              />
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFeatureItem__ArgProps,
          internalVariantPropNames: PlasmicFeatureItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureItem";
  } else {
    func.displayName = `PlasmicFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureItem = Object.assign(
  // Top-level PlasmicFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    // Metadata about props expected for PlasmicFeatureItem
    internalVariantProps: PlasmicFeatureItem__VariantProps,
    internalArgProps: PlasmicFeatureItem__ArgProps
  }
);

export default PlasmicFeatureItem;
/* prettier-ignore-end */
